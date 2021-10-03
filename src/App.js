import { Todo } from './components';

function App() {
	return (
		<div className="wrapper">
			<div className="app">
				<h1 className="app__title">
					React TODO
				</h1>
				<div className="app__main">
					<Todo />
				</div>
			</div>
		</div>
	);
}

export default App;
