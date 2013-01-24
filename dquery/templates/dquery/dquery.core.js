<script type="text/javascript">
var DQuery = {
    ajax: function(args) {
        url_args = typeof args.url_args !== 'undefined' ? args.url_args : [];
        arguments = {'url': '{% url  dquery-urlreverse %}?' + $.param({'url': args.url, 'url_args': url_args}) }
        if ('data' in args) {
            arguments['type'] = 'POST'
            arguments['data'] = args.data
        } else {
            arguments['type'] = 'GET'
        }
        if ('success' in args) {
            arguments['success'] = function(data, textStatus, jqXHR) {
                args.success(data);
            }
        }
        if ('error' in args) {
            arguments['error'] = function(data, textStatus, jqXHR) {
                args.error(data);
            }
        }
        $.ajax(arguments);
    },
    load: function(args) {
        url_args = typeof args.url_args !== 'undefined' ? args.url_args : [];
        arguments = {'url': '/dquery/?' + $.param({'url': args.url, 'url_args': url_args}) }
        if (($.isArray(args.data)) && (args.data.length > 0)) {
            arguments['type'] = 'POST'
            arguments['data'] = args.data;
        } else {
            arguments['type'] = 'GET'
        }
        $(args.selector).load(arguments);
    }
}
</script>
