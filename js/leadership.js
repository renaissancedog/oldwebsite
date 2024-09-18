function Award(props) {
  return (
    <div class="row">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </div> 
  ) 
}
function Page() {
  return (
    <main>
    <h2>Leadership Positions</h2>
    <div class="container">
    <Award title="UIL Mathematics team captain (2024)" body="Leads and coaches the members of championship-winning team"/>
    <Award title="San Antonio Math Circle Co-Founder (2024)" body="Founded a competitive math circle with friends"/>
    <Award title="Algebra Club Leader (2024)" body="Directs an algebra program at local library targeted at middle schoolers"/>
    <Award title="Webmaster, Reagan UIL Team (2024)" body="Maintains team website"/>
    <Award title="Co-Founder, Renaissance Dog Walkers (2022-2023)" body="Started and managed a dog-walking business with friends"/>
    </div>
    </main>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)