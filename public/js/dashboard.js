$(function () {
    
    //
    $('.delete').click(function (e) {
        e.preventDefault();
        var $this = $(this)
        var id = $this.data('id');

        $.ajax({
            url: '/post/del/' + id,
            dataType: 'JSON',
            type: 'DELETE',
            success: function (data) {
                if(data.code == 0) {
                    $this.parents('tr').remove()
                }
            },
            error: function (err) {
                alert(err.message)
            }
        })
    })

    $('.recommend').click(function (e) {
        e.preventDefault();
        var $this = $(this)
        var id = $this.data('id');
        $.ajax({
            url: '/post/recommend/' + id,
            dataType: 'JSON',
            type: 'PUT',
            success: function (data) {
                if(data.code == 0) {
                    $this.hide();
                }
            },
            error: function (err) {
                alert(err.message)
            }
        })
    })

    //
    $('.cateSelect').change(function (e) {
        e.preventDefault();
        var $this = $(this)
        var id = $this.data('id');

        $.ajax({
            url: '/post/setcate/' + id,
            dataType: 'JSON',
            type: 'PUT',
            data: {category: $this.val()},
            success: function (data) {
                if (data.code != 0) {
                    alert(data.message);
                }
            },
            error: function (err) {
                alert(err.message);
            }
        });
    })

	$('.topdown').click(function () {
		var $this = $(this)
		var cla = $this.attr('class').replace('topdown fa fa-arrow-', '')
		var id = $this.data('id')
		
		$.ajax({
			url: '/post/topdown/' + id,
			dataType: 'JSON',
			type: 'PUT',
			data: {now: cla},
			success: function (result) {
				if (result.code == 0) {
					$this.removeClass('fa-arrow-' + cla);
					$this.addClass('fa-arrow-' + (cla == 'up' ? 'down' : 'up'));
				}
			}
		})
	})

})
