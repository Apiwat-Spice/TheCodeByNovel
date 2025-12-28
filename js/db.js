const db = {
  users: [
    {
      id: 1,
      username: "x",
      password: "1",
      library: [] // user เริ่มต้นยังไม่มีหนังสือ
    },
    {
      id: 2,
      username: "y",
      password: "1",
      library: [] // user คนที่สอง
    }
  ],

  books: [
    {
      id: "novel001",
      title: "เงาในคืนจันทร์",
      cover: "https://upload.wikimedia.org/wikipedia/en/4/47/Take_Cover.jpg",
      content: `
บทที่ 1 : เสียงกระซิบในความมืด

ค่ำคืนนั้น พระจันทร์เต็มดวงลอยเด่นเหนือท้องฟ้า
แสงสีเงินสาดส่องลงมายังตรอกแคบที่เงียบงัน
เสียงฝีเท้าเบา ๆ ดังขึ้นในความมืด
`
    },
    {
      id: "novel002",
      title: "คืนฝนพรำที่ปลายทาง",
      cover: "https://upload.wikimedia.org/wikipedia/en/4/47/Take_Cover.jpg",
      content: `
บทที่ 1 : ฝนแรกของฤดู

สายฝนโปรยปรายลงมาไม่ขาดสาย
ถนนเปียกชื้นสะท้อนแสงไฟสลัว
การเดินทางครั้งนี้ อาจเปลี่ยนชีวิตของใครบางคนไปตลอดกาล
`
    },
    {
      id: "novel003",
      title: "ระยะห่างของหัวใจ",
      cover: "https://upload.wikimedia.org/wikipedia/en/4/47/Take_Cover.jpg",
      content: `
บทที่ 1 : คนแปลกหน้า

แม้จะยืนใกล้กันเพียงเอื้อมมือ
แต่หัวใจกลับห่างไกลเกินกว่าจะเข้าใจ
บางความรู้สึก ไม่อาจพูดออกมาเป็นคำพูดได้
`
    },
    {
      id: "novel004",
      title: "ใต้เงาซากุระ",
      cover: "https://upload.wikimedia.org/wikipedia/en/4/47/Take_Cover.jpg",
      content: `
บทที่ 1 : กลีบดอกไม้แรก

กลีบซากุระปลิวไสวไปตามสายลม
พาเอาความทรงจำเก่า ๆ กลับมาอีกครั้ง
ฤดูใบไม้ผลิปีนั้น ไม่มีวันเลือนหาย
`
    },
    {
      id: "novel005",
      title: "บันทึกวันสิ้นโลก",
      cover: "https://upload.wikimedia.org/wikipedia/en/4/47/Take_Cover.jpg",
      content: `
บทที่ 1 : วันสุดท้าย

เสียงไซเรนดังขึ้นทั่วเมือง
ผู้คนวิ่งหนีเอาชีวิตรอด
ไม่มีใครรู้ว่าวันพรุ่งนี้จะยังคงมีอยู่หรือไม่
`
    }
  ],

  redeemCodes: [
    { code: "ABC-123-XYZ", bookId: "novel001", usedBy: null },
    { code: "RAIN-456-END", bookId: "novel002", usedBy: null },
    { code: "HEART-789-DIST", bookId: "novel003", usedBy: null },
    { code: "SAKURA-111-LOVE", bookId: "novel004", usedBy: null },
    { code: "END-999-WORLD", bookId: "novel005", usedBy: null }
  ]
};
