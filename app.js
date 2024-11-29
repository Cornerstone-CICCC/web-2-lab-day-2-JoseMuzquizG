$(function() {
  let userId = 1

  $('header button:first-child').on('click', () => {
    if (userId > 1) {
      userId = userId - 1
    } else {
      userId = 30
    }
    fetchUserById(userId)
  })

  $('header button:last-child').on('click', () => {
    if (userId < 30) {
      userId = userId + 1
    } else {
      userId = 1
    }
    fetchUserById(userId)
  })

  const fetchUserById = (id) => {
    $.ajax({
      url: `https://dummyjson.com/users/1`,
      type: 'GET',
      success: function(response) {
        console.log('User details:', response)
      },
      error: function(error) {
        console.error('Error retrieving user details:', error)
      }
      
    })

    $.ajax ({
      url: `https://dummyjson.com/users/1`,
      type: 'POST',
      data: JSON.stringify({firstName: "Emily"}),
      contentType: application/json,
      success: function(response) {
        
      }
    })

    // $.ajax({
    //   url: `https://dummyjson.com/users/1/posts`,
    //   type: 'GET',
    //   success: function(response) {
    //     console.log('User posts:', response)
    //   },
    //   error: function(error) {
    //     console.error('Error retrieving user details:', error)
    //   }
    // })

    // $.ajax({
    //   url: `https://dummyjson.com/users/1/todos`,
    //   type: 'GET',
    //   success: function(response) {
    //     console.log('User todos:', response)
    //   },
    //   error: function(error) {
    //     console.error('Error retrieving user details:', error)
    //   }
    // })
  }


})