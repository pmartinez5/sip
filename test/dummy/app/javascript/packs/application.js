/* eslint no-console:0 */

// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log('Hola Mundo desde Webpacker')

require("@rails/ujs").start()   // Javascript no intrusivo segun rails
require("turbolinks").start()   // Acelera carga de paginas
//require("@rails/activestorage").start()         // Activestorage
//require("channels")           // ActiveChannel


//var $ = require("jquery");      // Jquery reciente 
import {$, jQuery} from 'jquery';
import "popper.js"              // Dialogos emergentes usados por bootstrap
import "bootstrap"              // Maquetacion y elementos de diseño
import "chosen-js/chosen.jquery";       // Cuadros de seleccion potenciados


