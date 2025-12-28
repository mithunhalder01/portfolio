import React from 'react'

export default function GlassCard({children, className=''}){
return (
<div className={`glass p-6 rounded-2xl shadow-sm ${className}`}>
{children}
</div>
)
}


