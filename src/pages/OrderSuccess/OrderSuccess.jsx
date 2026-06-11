import React, { useEffect, useRef } from 'react'
import './OrderSuccess.css'
import { useNavigate } from 'react-router-dom'

const OrderSuccess = () => {
  const navigate = useNavigate()
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const card = canvas.parentElement
    const W = card.offsetWidth
    const H = card.offsetHeight
    canvas.width = W
    canvas.height = H
    const ctx = canvas.getContext('2d')

    const colors = ['#FF5F3F', '#22c55e', '#FFD147', '#3B82F6', '#EC4899', '#A78BFA']
    const pieces = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H * -0.5 - 10,
      r: 3 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 3,
      vy: 2 + Math.random() * 4,
      angle: Math.random() * 360,
      spin: (Math.random() - 0.5) * 8,
      alpha: 1,
      shape: Math.random() > 0.5 ? 'rect' : 'circle',
    }))

    let frame = 0
    let animId

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      pieces.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.angle += p.spin
        if (p.y > H + 20) p.alpha = Math.max(0, p.alpha - 0.04)
        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.translate(p.x, p.y)
        ctx.rotate((p.angle * Math.PI) / 180)
        ctx.fillStyle = p.color
        if (p.shape === 'rect') {
          ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r)
        } else {
          ctx.beginPath()
          ctx.arc(0, 0, p.r, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.restore()
      })
      frame++
      if (frame < 180) animId = requestAnimationFrame(draw)
      else ctx.clearRect(0, 0, W, H)
    }

    const timer = setTimeout(() => {
      animId = requestAnimationFrame(draw)
    }, 300)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <div className="order-success">
      <div className="success-card">
        <canvas className="confetti-canvas" ref={canvasRef}></canvas>

        <div className="success-check">
          ✓
        </div>

        <h1>Order placed! 🎉</h1>

        <p>Your food is being prepped and will arrive at your door soon. Sit tight!</p>

        <div className="success-divider"></div>

        <div className="success-meta">
          <div className="meta-item">
            <span className="meta-label">Order ID</span>
            <span className="meta-val">#QB-7429</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Est. Delivery</span>
            <span className="meta-val">25–35 min</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Total</span>
            <span className="meta-val">₹349</span>
          </div>
        </div>

        <button className="success-btn" onClick={() => navigate('/')}>
          Continue Shopping
        </button>

        <button className="track-btn">
          Track your order →
        </button>
      </div>
    </div>
  )
}

export default OrderSuccess