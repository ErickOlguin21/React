// Uso de hooks se da por componentes funcionales
import React, { useState } from 'react'

const Example = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>
                Yoy clicked {count} times.
            </p>
            <button onClick = {() => setCount(count + 1 )}>

            </button>
        </div>
    )

}

export default Example