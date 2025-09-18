import React from 'react'
export default function Intro(){
  return(<div className="grid md:grid-cols-2 gap-8 items-start">
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold">Tổng quan dự án</h2>
      <p className="mt-4 text-black/70">Bản demo mô phỏng bố cục trang gốc, bạn hãy thay nội dung/ảnh thật khi triển khai.</p>
      <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
        <li className="card p-4">• Quy mô: ~xx ha</li>
        <li className="card p-4">• Loại hình: Shophouse, Liền kề, Biệt thự</li>
        <li className="card p-4">• Pháp lý: Sổ đỏ từng căn</li>
        <li className="card p-4">• Bàn giao: Dự kiến năm x</li>
      </ul>
    </div>
    <div className="card p-6">
      <h3 className="text-lg font-medium">Điểm nhấn</h3>
      <ol className="mt-3 space-y-2 text-sm list-decimal list-inside text-black/80">
        <li>Tiện ích liên hoàn</li>
        <li>Cộng đồng văn minh</li>
        <li>Thiết kế tối ưu công năng</li>
      </ol>
    </div>
  </div>)
}