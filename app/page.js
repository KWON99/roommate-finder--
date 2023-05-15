import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { connectDB } from '@/util/database'
import 'app/style.css'
import { getServerSession } from 'next-auth'
import Link from 'next/link'


export default async function Home() {

  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()
  let user = await db.collection('user_cred').find().toArray()


  let session = await getServerSession(authOptions)
  if (session) {
    console.log(session)
  }
  // post collection의 모든 데이터 출력

  return (
    <form>
      <div className="board_wrap">
        <div className="board_title">
          <strong>룸메이트 게시판</strong>
        </div>
        <div className="board_list_wrap">
          <div className="board_list">
            <div className="top">
              <div className="num">번호</div>
              <div className="title">제목</div>
              <div className="writer">글쓴이</div>
              <div className="date">작성일</div>
            </div>

            {
              result.map((a, i) =>
                <div>
                  <div className="num">{i + 1}</div>
                  <div className="title"><Link href={'/detail/' + result[i]._id}>{result[i].title}</Link></div>
                  <div className="writer">{result[i].name}</div>
                  <div className="date">{result[i].date}</div>
                </div>
              )
            }

          </div>
          <div className="board_page">
            <a href="#" className="bt first">	&lt;	&lt;</a>
            <a href="#" className="bt prev">	&lt;  </a>
            <a href="#" className="num on">1</a>
            <a href="#" className="num">2</a>
            <a href="#" className="num">3</a>
            <a href="#" className="num">4</a>
            <a href="#" className="num">5</a>
            <a href="#" className="bt next">&gt;</a>
            <a href="#" className="bt last">&gt;&gt;</a>
          </div>
          <div className="bt_wrap">
            <a href='/write'>등록</a>
          </div>
        </div>
      </div>
    </form>
  )
}
