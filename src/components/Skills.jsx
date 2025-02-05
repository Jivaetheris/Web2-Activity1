function Skills() {
    return(
        <div>
            <div className="flex flex-col items-center mt-5">
                <div className="border-1 border-black p-1 rounded-md w-3/4">
                    <h1 className="text-lg font-bold">Skills</h1>
                    <ul className="list-disc text-blue-500 marker:text-black ml-5">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>PHP</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>TailWindCSS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;