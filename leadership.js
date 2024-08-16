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
      <h2>Leadership Positions</h2>
      <div class="awardcontainer">
        <div class="awardcolumn">
          <h3>UIL Mathematics team captain</h3>
            <p>Leads and coaches the members of our championship-winning team</p>
        </div>
        <div class="awardcolumn">
          <h3>Webmaster, Reagan UIL Team</h3>
          <p>Maintains team website-check it out <a href="https://reagan-uil.github.io">here</a></p>
        </div>
        <div class="awardcolumn">
          <h3>Co-Founder, Renaissance Dog Walkers</h3>
          <p>Started and managed a dog-walking business with friends</p>
        </div>
      </div>
    </main>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)