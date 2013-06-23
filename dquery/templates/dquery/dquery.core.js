<script type="text/javascript">
	var DQuery = {
	    ajax: function(args) {
	        url_args = typeof args['url_args'] !== 'undefined' ? args['url_args'] : [];
	        args['url'] = '{% url  'dquery-urlreverse' %}?' + $.param({'url_name': args['url_name'], 'url_args':url_args})
	        //console.log('{% url  'dquery-urlreverse' %}?' + $.param({'url_name': args['url_name'], 'url_args':url_args}));
	        delete args['url_name']
	        delete args['url_args']
		    $.ajax(args);
	    }
    }
</script>
