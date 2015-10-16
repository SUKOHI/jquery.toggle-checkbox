# jquery.toggle-checkbox
A jQuery plugin to replace input checkbox with specific contents like icons.

![サンプル画像](http://i.imgur.com/WyqwhnQ.png) 

Requirements
====

* [jQuery](https://jquery.com/)

Installation
=====
Using bower is the simplest way.

    bower install jquery.toggle-checkbox --save-dev

Usage
====

**Basic Way**

in HTML
    
    <input name="checkboxes[]" type="checkbox" class="toggle-checkbox" value="1">
    <input name="checkboxes[]" type="checkbox" class="toggle-checkbox" value="2">
    <input name="checkboxes[]" type="checkbox" class="toggle-checkbox" value="3" checked>
    

in JavaScript

    $('.toggle-checkbox').toggleCheckbox([
        '<span>Open</span>',
        '<span>Close</span>'
    ]);
    

**with Callback**

    $('.toggle-checkbox').toggleCheckbox([
        '<i class="fa fa-circle-o"></i>',
        '<i class="fa fa-check-circle-o"></i>'
    ], function(e, targetCheckbox){

        alert(targetCheckbox.val());

    });

**Changing checked value by event**

    $('#all_check_button').on('click', function(){

        var checked = $(this).is(':checked');
        $('.toggle-checkbox').prop('checked', checked).change();

    });
    
*You need call change().

License
====

This package is licensed under the MIT License.

Copyright 2015 Sukohi Kuhoh
