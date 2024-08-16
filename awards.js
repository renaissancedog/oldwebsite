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
      <h2>Mathematics Awards</h2> 
      <div class="awardcontainer">
        <div class="awardcolumn">
          <h3>AIME Qualifier and top 50% (2023/24)</h3>
            <p>Was top 7% of all AMC 10 test takers.</p>
        </div>
        <div class="awardcolumn">
          <h3>1st Place, AMC 10, Reagan High School (2024)</h3>
          <p>Scored highest on the AMC 10 at Reagan</p>
        </div>
        <div class="awardcolumn">
          <h3>AMC 8 Honor Roll (2023)</h3>
          <p>Was top 5% of all AMC 8 test takers.</p>
        </div>
        <div class="awardcolumn">
          <h3>MATHCOUNTS Chapter Countdown Round Champion, Written 3rd place, Team 2nd place (2023)</h3>
          <p>Winner of the Bexar Chapter competition</p>
        </div>
        <div class="awardcolumn">
          <h3>UIL Mathematics, Number Sense and Calculator Applications Regional Qualifier (2024)</h3>
          <p>Placed top 3 in District competitions</p>
        </div>
      </div>
      <h2>Computer Science Awards</h2>
      <div class="awardcontainer">
        <div class="awardcolumn">
          <h3>UIL Computer Science Regional Qualifier (2024)</h3>
          <p>Member of the top team in District competitions</p>
        </div> 
        <div class="awardcolumn">
          <h3>USACO Bronze (2024)</h3>
          <p>Participated in programming and problem-solving olympiad</p>
        </div> 
      </div>
      <h2>Academic Awards</h2>
      <div class="awardcontainer">
        <div class="awardcolumn">
          <h3>PSAT 8/9 Perfect Scorer (2024)</h3>
          <p>Scored 1440 on nationally administered test</p>
        </div> 
        <div class="awardcolumn">
          <h3>Straight A's (2020-2024)</h3>
          <p>All final grades were 90 or higher from 6th to 9th grades</p>
        </div> 
      </div>
      <h2>Musical Awards</h2>
      <div class="awardcontainer">
        <div class="awardcolumn">
          <h3>TSSEC Qualifier (2024)</h3>
          <p>Qualified to play at prestigious state solo competition</p>
        </div> 
        <div class="awardcolumn">
          <h3>Region Orchestra Member (2021-2024)</h3>
          <p>Auditioned into All-Region orchestra</p>
        </div> 
      </div>
    </main>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)