(function() {

  let deleteButton;

//This builds the page
  function getPatterns() {
    $.get("http://localhost:1337/pattern", function(data) {
       $.each(data, function(index, pattern) {
        deleteButton = `<button class='btn btn-danger' data-block_id='${pattern.block_id}'>Delete</button>`;

        //console.log(deleteButton);
        $('#pattern-table tbody').append(
          '<tr class="child"><td>' + pattern.block_id +
          '</td><td>' + pattern.block_name +
          '</td><td>' + pattern.block_type +
          '</td><td>' + pattern.finished_size +
          '</td><td>' + pattern.number_pieces +
          '</td><td>' + pattern.number_fabrics +
          '</td><td>' + deleteButton +
          '</td></tr>');
      })

  //Delete button functionality
      $(".btn").click (function() {
        console.log("want to delete " + $(this).data("block_id"));
        $.ajax({
            url: "http://localhost:1337/pattern/" + $(this).data("block_id"),
            type: 'DELETE',
            success: function() {
    //  reload the page from server
            location.reload(true);
            }
        })
      })
    })
  }

 getPatterns();
})();
