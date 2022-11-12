var Varcomments = {}
function saveComment(){
    commentInp  = document.getElementById('commentInp')
    add(commentInp.value)
}

function add(comment){
    console.log(comment)
    var fireRef = firebase.database().ref().child('comments')
    fireRef.push(comment);
    var toBeCleared = document.getElementById('comments')
    toBeCleared.innerHTML = ""
    toBeCleared.className = 'comments'
    // generate()
    var ref = firebase.database().ref();

    ref.on("value", function(snapshot) {
        comments = (snapshot.val().comments);
        // console.log(snapshot.val().comments, typeof snapshot.val().comments)

        Varcomments = snapshot.val().comments
        // console.log((snapshot.val().comments).length)
        var size = Object.keys(snapshot.val().comments).length;
        console.log(size)
        for (let i = 0; i<size ; i++){
            // console.log(Object.keys(Varcomments)[i]) //right
            // console.log(Object.values(Object.values(Varcomments)[i])) //correct !!!!
            generateNew(Object.values(Varcomments)[i])
        }

    });
    
}


function generate(){
    
    var firebaseConfig = {
        apiKey: "AIzaSyCmngadERg9rWbXWlzfywxCSOiHzx5LyH4",
        authDomain: "js-comments-4456d.firebaseapp.com",
        projectId: "js-comments-4456d",
        storageBucket: "js-comments-4456d.appspot.com",
        messagingSenderId: "871628818258",
        appId: "1:871628818258:web:10ef825c5c524dbb095c8b",
        measurementId: "G-5GZBCHNX5P",
        databaseURL: "https://js-comments-4456d-default-rtdb.firebaseio.com/"

    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    var ref = firebase.database().ref();

    ref.on("value", function(snapshot) {
        comments = (snapshot.val().comments);
        // console.log(snapshot.val().comments, typeof snapshot.val().comments)

        Varcomments = snapshot.val().comments
        // console.log((snapshot.val().comments).length)
        var size = Object.keys(snapshot.val().comments).length;
        console.log(size)
        for (let i = 0; i<size ; i++){
            // console.log(Object.keys(Varcomments)[i]) //right
            // console.log(Object.values(Object.values(Varcomments)[i])) //correct !!!!
            generateNew(Object.values(Varcomments)[i])
        }

    });

    
}

function generateNew(message){



    var _comment = document.createElement("div")
  
    _comment.className="comment"
        
    var c2 = document.getElementById("comments")
    c2.appendChild(_comment)
    
    

    var _quote = document.createElement("div")
    _quote.className="message"
    _quote.innerHTML = "&nbsp;"+message
    _comment.appendChild(_quote)  
}

function infS(){
    var scr = document.getElementById('comments')
    // scr.scrollBy(1)
    scr.scrollTop=scr.scrollHeight
    
}

{/* <div class="c">
<div class="card-home">
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
  <span>5</span>
  <span>6</span>
  <span>7</span>
  <span>8</span>
  <!-- copy the number of spans displayed at the beggining onto the end -->
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
  <span>5</span>
</div>
</div> */}

// .c{
//     position:relative;
//     background:red;
//     max-height:225px;  /*height to show an exact number of spans  - in this case span is 45px (40 height plus 5 margin as margins collapse) and we are showing 5 spans to start */
//     float:left;
//     width:315px;
//     height:225px;
//     overflow:hidden;
//     overflow-y:auto;
//   }
//   .card-home{
//     position:absolute;
//       top:0;
//         animation: scroll 10s linear 1s infinite;
//   }
//   span {
//     min-width:290px;
//     min-height:40px;
//     display:block;
//     color:white;
//     margin:5px;
//     background:blue;
//   }
//   @keyframes scroll {
//       100% { top: -360px; }  /* top is the number of spans (in this case 8) multiplied by span height (45px as described above)*/
//   }