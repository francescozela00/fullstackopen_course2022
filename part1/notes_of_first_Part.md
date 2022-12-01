To create initial react app the command it's

1: npx create-react-app
also: 
npx create-react-app .  = The dot you can create an application inside on folder 
or
npx crate-react-app foldername  =  you can create react app but then create the folder for your application 


Once error :
If you create an file like an readMe or folder inside the folder react project 
if you want to init the project with that file inside 
you will give this error: 

The directory . contains files that could conflict:

  fistLessonsNote.md 

Either try using a new directory name, or remove the files listed above.


To start our application you can do: 

npm start -> that executing the package.json scripts

  "scripts": {
    "start": "react-scripts start", -> run application 
    "build": "react-scripts build", -> build the application for hosting or production 
    "test": "react-scripts test", 
    "eject": "react-scripts eject"
  }



There an example of props: "passing data to components"

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

Hello = name of components to be executed on Main function of the react application like:   <Hello name="Example" age="12" />

Exercises 1.3.-1.5 :

When you want to define an props like :

props = {
  name: 'Arto Hellas',
  age: 35,
}


Exercises D A more complex state, debugging React apps:


To create button clicks and more complex function we need to import useState


example component of useState():
  
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0
  })

  clicks are the clicks made, and the setClicks are clicks we want to set like left: 5 start with five clicks.

  To simplify the code we can simple use that statement:

  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })

  const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })
