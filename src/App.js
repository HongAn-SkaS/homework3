import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="title">Hello World! 👋</h1>
      <p className="subtitle">Chào mừng bạn đến với ứng dụng React đầu tiên</p>
      
      <div className="badge-container">
        <span className="badge">React.js</span>
        <span className="badge">Vercel</span>
      </div>

      <p style={{ margin: '15px 0', fontSize: '1.1rem' }}>
        Số lần bấm nút: <strong>{count}</strong>
      </p>

      <button className="btn" onClick={() => setCount(count + 1)}>
        Tăng số lượng 🚀
      </button>

      <div className="footer-text">
        Deployed with ❤️ on Vercel
      </div>
    </div>
  );
}

export default App;