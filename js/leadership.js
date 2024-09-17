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
    <Award title="UIL Mathematics team captain" body="Leads and coaches the members of our championship-winning team"/>
    <Award title="Webmaster, Reagan UIL Team" body="Maintains team website"/>
    <Award title="Co-Founder, Renaissance Dog Walkers" body="Started and managed a dog-walking business with friends"/>
    </div>
    </main>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)