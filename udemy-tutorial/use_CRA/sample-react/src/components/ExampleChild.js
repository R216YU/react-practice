import React from 'react'

const ExampleChild = () => {
  return (
    <React.Fragment>
        { /* ↓↓↓ Childコンポーネントに移動 */ }
        <div>
          <h3>Child Component</h3>
        </div>
        { /* ↑↑↑ Childコンポーネントに移動 */ }
    </React.Fragment>
  )
}

export default ExampleChild