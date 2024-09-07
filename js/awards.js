function Award(props) {
  return (
    <div class="awardcolumn">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </div> 
  ) 
}
function Page() {
  return (
    <main>
    <h2>Mathematics Awards</h2> 
    <div class="awardcontainer">
    <Award title="AIME Qualifier and top 50% (2023/24)" body="Was top 7% of all AMC 10 test takers"/>
    <Award title="1st Place, AMC 10, Reagan High School (2024)" body="Scored highest on the AMC 10 at Reagan"/>
    <Award title="AMC 8 Honor Roll (2022, 2023)" body="Was top 5% of all AMC 8 test takers."/>
    <Award title="MATHCOUNTS Chapter Countdown Round Champion, Written 3rd place, Team 2nd place (2023)" body="Winner of the Bexar Chapter competition"/>
    <Award title="UIL Mathematics, Number Sense and Calculator Applications Regional Qualifier (2024)" body="Was top 7% of all AMC 10 test takersPlaced top 3 in District competitions"/>
    </div>
    <h2>Computer Science Awards</h2>
    <div class="awardcontainer">
    <Award title="UIL Computer Science Regional Qualifier (2024)" body="Member of the top team in District competitions"/>
    <Award title="USACO Bronze (2024)" body="Participated in programming and problem-solving olympiad"/>
    </div>
    <h2>Academic Awards</h2>
    <div class="awardcontainer">
    <Award title="PSAT 8/9 Perfect Scorer (2024)" body="Scored 1440 on nationally administered test"/>
    <Award title="Straight A's (2020-2024)" body="All semester grades were 90 or higher from 6th grade onwards"/>
    </div>
    <h2>Musical Awards</h2>
    <div class="awardcontainer">
    <Award title="TSSEC Qualifier (2024)" body="Qualified to play at prestigious state solo competition"/>
    <Award title="Region Orchestra Member (2021-2024)" body="Auditioned into All-Region orchestra"/>
    </div>
    </main>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)