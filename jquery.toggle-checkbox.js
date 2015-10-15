;(function($) {

    $.fn.toggleCheckbox = function(toggleContents, callback) {

        var TC = {

            isChecked: function(element){

                return $(element).is(':checked');

            },
            getContentIndex: function(element){

                return (TC.isChecked(element)) ? 1 : 0;

            },
            getContent: function(toggleContents, index){

                var container = $('<span></span>');
                return container.on('click', function(e){

                    var checkbox = $(this).prev();
                    var nextChecked = !TC.getContentIndex(checkbox);
                    var contentIndex = (nextChecked) ? 1 : 0;
                    var toggleContent = TC.getContent(toggleContents, contentIndex);

                    checkbox.after(toggleContent).prop('checked', nextChecked);
                    $(this).remove();

                    if(typeof(callback) == 'function') {

                        callback(e, checkbox);

                    }

                })
                .css('cursor', 'pointer')
                .html(toggleContents[index]);

            }

        };

        $.each(this, function(key, element){

            var contentIndex = TC.getContentIndex(element);
            var toggleContent = TC.getContent(toggleContents, contentIndex);
            $(element).after(toggleContent).css('display', 'none');

        });

    }

})(jQuery);