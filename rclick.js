/*
 * Copyright 2016 Hublabs. Yazılım Ofisi
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 *
 * rClick.js v1.0
 *
 * @hublabsTurkey
 * @ufukOzarslan
 *
 * @hublabs.com.tr 2016
 *
 */

jQuery.fn.rClick = function ($setting) {

    var $config = jQuery.extend({
            click: null,
            element: $('#tooltip'),
            fade: 'slow',
            delay: 100, // ms
            key: [3, 2]
        }, $setting),
        $they = this;

    $they.css({'display': 'block', 'width': '100%'});

    /**
     *
     * Eger mouse sag tıklanırsa veya sağ button kullanılırsa
     * contextmenu ile event code yakalanır.
     *
     * @return undefined
     */

    $they.on('contextmenu', function ($e) {

        $e = $e || window.event;

        if ($e.which === $config.key[0] || $e.button === $config.key[1]) {

            /**
             *
             * Mouse'n X ve Y kordinatına göre absolute elemanı gizli halden
             * gösterilir.
             *
             */

            $config.element.css({
                display: 'block',
                position: 'absolute',
                top: event.pageY,
                left: event.pageX
            });

            /**
             *
             * Acılan alanda alan secilir ise elemana aktif bir sınıf
             * atanır. Bu sekilde secileni bulabilir.
             *
             */

            $config.element.find('li').click(function () {

                $config.element.find('li').removeClass('active');

                $(this).addClass('active');
            })

            var loop = setTimeout(function () {

                $they.fadeIn($config.fade);

            }, $config.delay);

            /**
             *
             * Mouse sag tıklandığında acilan tooltip alanı mouse'n ustunden
             * sekilmesi sonucu delay degerinde tooltip elamanı yeniden pasif
             * hale getirilir
             *
             */

            $config.element.mouseover(function () {

                if (loop) clearTimeout(loop);

            }).mouseout(function () {

                if (loop) clearTimeout(loop);

                loop = setTimeout(function () {

                    $config.element.fadeOut($config.fade);

                }, $config.delay);

                $config.element.find('li').removeClass('active');

            });

            $e.preventDefault();

        }

    })
}