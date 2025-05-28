function App() {
  const problems = [
    {
      title: "1. Two Sum",
      difficulty: "Easy",
      acceptance: "55.7%",
    },
    {
      title: "2. Add Two Numbers",
      difficulty: "Medium",
      acceptance: "46.1%",
    },
    {
      title: "4. Median of Two Sorted Arrays",
      difficulty: "Hard",
      acceptance: "43.6%",
    },
  ];
  return (
    <div>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button>Sign in</button>
      <div>
        <button>1</button>
        <button>2</button>
      </div>
      <div>
        {problems.map((problem) => (
          <ProblemStatement
            title={problem.title}
            difficulty={problem.difficulty}
            acceptance={problem.acceptance}
          />
        ))}
      </div>
    </div>
  );
}

function ProblemStatement(props) {
  const title = props.title;
  const difficulty = props.difficulty;
  const acceptance = props.acceptance;

  return (
    <tr>
      <td>{title}</td>
      <td>{difficulty}</td>
      <td>{acceptance}</td>
    </tr>
  );
}

export default App;
