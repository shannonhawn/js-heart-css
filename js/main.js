var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $p = $('main p:first-child');
var $h2 = $('h2');
var $li = $('main li');
var $img = $('img');
var $first = $('ul li:first-child');
var $last = $('ul li:last-child');
var $dl = $('dl');
var $dt = $('dt');
var $show = $('ul li:last-child');

  $header.addClass('masthead');
  $h1.removeClass('big-heading');
  $h1.addClass('logo');
  $main.addClass('wrapper');
  $p.addClass('intro');
  $h2.addClass('slug-head');
  $li.addClass('slug-list');
  $img.addClass('slug-img');
  $first.addClass('slug-list-first');
  $last.addClass('slug-list-last');
  $dl.addClass('classification');
  $dt.removeClass('big-label');
  $show.show('last-child');
