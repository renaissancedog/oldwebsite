function Page() {
  return (
    <main>
      <h1 id="intro">Hello, World!</h1>
      <h2>About Me</h2> 
      <div class="container">
        <div class="row">
          <h3>My Background</h3>
          <p>I am a sophomore at Ronald Reagan High School in San Antonio, Texas. Welcome to my website!</p>
        </div>
        <div class="row">
          <h3>My Academic Interests</h3>
          <p>I am interested in mathematics (combinatorics and probability theory in particular), computer science (check out my <a href="https://github.com/renaissancedog">GitHub!</a>) and cybersecurity.
          </p>
        </div>
        <div class="row">
          <h3>My Hobbies</h3>
          <p>In my free time, I enjoy playing the violin, reading, swimming and playing video games.</p>
        </div>
      </div>
    </main>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)