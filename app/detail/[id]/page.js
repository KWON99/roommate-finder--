import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import 'app/style.css'
import Link from "next/link"


export default async function Detail(props) {

    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })
    return (
        <form className="board_wrap">
            <div className="board_view_wrap">
                <div className="board_view">
                    <div className="title">
                        {result.title}
                    </div>
                    <div className="info">
                        <dl>
                            <dt>글쓴이</dt>
                            <dd>{result.name}</dd>
                        </dl>
                        <dl>
                            <dt>작성일</dt>
                            <dd>{result.date}</dd>
                        </dl>
                    </div>
                    <div className="cont">
                        {result.content}
                    </div>
                </div>
                <div className="bt_wrap">
                    <a href="/" className="on">목록</a>
                    <Link href={'/edit/' + new ObjectId(props.params.id)}>수정</Link>
                </div>
            </div>
        </form>
    )
}