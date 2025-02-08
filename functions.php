<?php

// Pobierz dane strony (np. id, slug, tytuł, treść, ACF)
function get_current_page_data() {
    global $post;

    if (is_singular('page') || is_page()) {
        $page_data = array(
            'id' => $post->ID,
            'slug' => $post->post_name,
            'title' => get_the_title($post->ID),
            'content' => apply_filters('the_content', $post->post_content),
            'acf' => get_fields($post->ID),
        );
    } else {
        $page_data = array();
    }

    // Przekaż dane do React za pomocą wp_localize_script
    wp_enqueue_script('theme-js', get_template_directory_uri() . '/assets/js/dist/bundle.js', array(), '1.0', true);
    wp_localize_script('theme-js', 'pageData', $page_data);
}
add_action('wp_enqueue_scripts', 'get_current_page_data');

// Pobierz dane z grupy ACF (do ponownego użycia na wszystkich stronach)
function get_acf_group_fields($group_name, $post_id = null) {
    if (!$post_id) {
        $post_id = get_the_ID(); // Jeśli nie podano post_id, użyj ID bieżącego posta
    }

    return get_field($group_name, $post_id) ?: [];
}

// Pobierz dane dla typów postów (Usługi, FAQ, Etapy itd.)
function get_acf_data_for_custom_posts() {
    $acf_data = array();
    
    // Bannery
    $index = 1;
    while (true) {
        $banner_title = get_field('baner_title_' . $index);
        $banner_subtitle = get_field('baner_subtitle_' . $index);
        $banner_desc = get_field('baner_desc_' . $index);
        $banner_image = get_field('baner_image_' . $index);

        if (empty($banner_title) && empty($banner_desc) && empty($banner_image)) {
            break;
        }

        $acf_data['banners'][] = array(
            'title' => $banner_title,
            'subtitle' => $banner_subtitle,
            'description' => $banner_desc,
            'image' => $banner_image,
        );

        $index++;
    }


    // Pobierz dane dla Usług
    $services = get_posts(array(
        'post_type' => 'uslugi',
        'posts_per_page' => -1,
    ));

    foreach ($services as $service) {
        $acf_data['services'][] = array(
            'ID' => $service->ID,
            'title' => get_field('services_title', $service->ID),
            'image' => get_field('services_image', $service->ID),
            'text' => get_field('services_text', $service->ID),
        );
    }
    // Sortowanie etapów według ID
    usort($acf_data['services'], function ($a, $b) {
        return $a['ID'] - $b['ID'];
    });

    // Pobierz FAQ
    $faq = get_posts(array(
        'post_type' => 'FAQ',
        'posts_per_page' => -1,
    ));

    foreach ($faq as $quest) {
        $acf_data['faq'][] = array(
            'ID' => $quest->ID,
            'title' => get_field('FAQ_title', $quest->ID),
            'text' => wp_kses_post(get_field('FAQ_text', $quest->ID)),
        );
    }
     // Sortowanie FAQ według ID
     usort($acf_data['faq'], function ($a, $b) {
        return $a['ID'] - $b['ID'];
    });

    // Pobierz Etapy
    $etap = get_posts(array(
        'post_type' => 'etap',
        'posts_per_page' => -1,
    ));

    foreach ($etap as $etapelem) {
        $acf_data['etapy'][] = array(
            'ID' => $etapelem->ID,
            'title' => get_field('etap-title', $etapelem->ID),
            'text' => wp_kses_post(get_field('etap-text', $etapelem->ID)),
            'img' => wp_kses_post(get_field('etap-icon-href', $etapelem->ID)),
        );
    }
     // Sortowanie etapów według ID
     usort($acf_data['etapy'], function ($a, $b) {
        return $a['ID'] - $b['ID'];
    });

    // Grupy ACF
    $acf_data['about'] = get_acf_group_fields('about');
    $acf_data['titles_all'] = get_acf_group_fields('titles-all');

    return $acf_data;
}

// Przekaż dane ACF do React (na każdej stronie)
function my_enqueue_scripts() {
    wp_enqueue_script('theme-js', get_template_directory_uri() . '/assets/js/dist/bundle.js', array(), '1.0', true);

    // Pobierz dane ACF (np. banery, usługi, FAQ itd.) na każdej stronie
    $acf_data = get_acf_data_for_custom_posts();
    wp_localize_script('theme-js', 'acfData', $acf_data);
}
add_action('wp_enqueue_scripts', 'my_enqueue_scripts');

// Przekaż shortcode formularza kontaktowego
function pass_contact_form_shortcode_to_js() {
    $contact_form_shortcode = '[contact-form-7 id="5ebe246" title="Formularz 1"]';

    wp_localize_script('theme-js', 'contactFormData', array(
        'shortcode' => do_shortcode($contact_form_shortcode),
    ));
}
add_action('wp_enqueue_scripts', 'pass_contact_form_shortcode_to_js');

// Zarejestruj widżety stopki
function register_footer_widgets() {
    $footer_blocks = array(
        'Footer Block 1' => 'footer-1',
        'Footer Block 2' => 'footer-2',
        'Footer Block 3' => 'footer-3',
    );

    foreach ($footer_blocks as $name => $id) {
        register_sidebar(array(
            'name' => __($name, 'your-theme'),
            'id' => $id,
            'description' => __('Add widgets here for ' . $name, 'your-theme'),
            'before_widget' => '<div class="footer-widget ' . $id . '">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="footer-title">',
            'after_title' => '</h3>',
        ));
    }
}
add_action('widgets_init', 'register_footer_widgets');
?>
