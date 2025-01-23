const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>{props.parts.name} {props.parts.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    const variousParts = props.parts.map(unit => {
        return (
            <Part key = {unit.id} parts = {unit} />
        )
    })

    return (
        <div>
            {variousParts}
        </div>
    )
}

const Total = (props) => {
    const totalExercises = props.parts.reduce((sum, order) => sum + order.exercises, 0)
    
    return (
        <div>
            <p>
                total of {totalExercises} exercises
            </p>
        </div>
    )
}

const Course = (props) => {
    return (
        <div>
            <Header title = {props.course.name} />
            <Content parts = {props.course.parts} />
            <Total parts = {props.course.parts} />
        </div>
    )
}

export default Course
