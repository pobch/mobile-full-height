import * as React from 'react'

export function App() {
  const [, forceRender] = React.useReducer((x) => x + 1, 0)
  return (
    <div>
      <div style={{ height: '70vh', backgroundColor: 'skyblue' }}>
        <div>
          <div>
            documentElement.clientWidth x Height: {document.documentElement.clientWidth} x{' '}
            {document.documentElement.clientHeight}
          </div>
          <div>
            window.innerWidth x Height: {window.innerWidth} x {window.innerHeight}
          </div>
        </div>
        <div>
          <input type="text" /> <button onClick={() => forceRender()}>Force Render</button>
        </div>
      </div>
      <div>
        <div>
          <div>
            documentElement.clientWidth x Height: {document.documentElement.clientWidth} x{' '}
            {document.documentElement.clientHeight}
          </div>
          <div>
            window.innerWidth x Height: {window.innerWidth} x {window.innerHeight}
          </div>
        </div>
        <div>
          <input type="text" /> <button onClick={() => forceRender()}>Force Render</button>
        </div>
      </div>
    </div>
  )
}
