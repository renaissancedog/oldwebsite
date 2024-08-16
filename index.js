function Nav() {
  return (
      <div id="nvb">
      <a href="index.html" id="namelink">
        <div id="name">
          <h2 id="wrapper">William Liu</h2>
        </div>
      </a>
      <nav class="navbar">
        <a href="index.html">Home</a>
        <a href="awards.html">Awards</a>
        <a href="leadership.html">Leadership</a>
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        </link>
      </nav>
    </div> 
  )
} 
function Award(title, body) {
  return (
    <div class="awardcolumn">
        <h3>{title}</h3>
        <p>{body}</p>
      </div> 
  ) 
}
function Page() {
  return (
    <main>
      <Nav />
      <h1 id="intro">Hello, World!</h1>
      <h2>About Me</h2> 
      <div class="container">
        <div class="column">
          <h3>My Background</h3>
          <p>I am a rising sophomore at Ronald Reagan High School in San Antonio, Texas. Welcome to my website!</p>
        </div>
      </div>
      <div class="container">
        <div class="column">
          <h3>My Academic Interests</h3>
          <p>I am interested in mathematics (combinatorics and probability theory in particular), computer science (check out my <a href="https://github.com/renaissancedog">GitHub!</a>) and cybersecurity.
          </p>
        </div>
        <div class="column">
          <h3>My Hobbies</h3>
          <p>In my free time, I enjoy playing the violin, reading, swimming and playing video games.</p>
        </div>
      </div>
    </main>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)