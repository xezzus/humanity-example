(function($){
    $.fn.hForm = function(callback){
        var formName = $(this).data('form');
        var data = {};

        // FIELD TYPE TEXT
        //////////////////
        $('[data-form="'+formName+'"] [data-type="text"]').each(function(i,e){
            $(e).attr('contentEditable','true');
        });

        // FIELD ACTION SUBMIT
        //////////////////////
        $('[data-form="'+formName+'"] [data-submit]').each(function(i,e){
            $(e).off().on('click',function(e){
                $('[data-form="'+formName+'"] [data-type="text"]').each(function(i,e){
                    var name = $(e).data('name');
                    var value = $(e).text();
                    data[name] = value;
                });
                var action = $(this).parents('[data-form="'+formName+'"]').data('action');
                callback(action,data,e);
            });
        });
    }
})(jQuery);
