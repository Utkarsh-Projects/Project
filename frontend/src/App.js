import React, { useEffect, useState } from 'react';


export default function App() {
const [msg, setMsg] = useState('...');
useEffect(() => {
fetch('/api/hello')
.then(r => r.json())
.then(d => setMsg(d.msg))
.catch(() => setMsg('API not reachable'));
}, []);


return (
<div style={{ fontFamily: 'sans-serif', padding: 24 }}>
<h1>React + Node + Nginx</h1>
<p>API says: <strong>{msg}</strong></p>
</div>
);
}
