import React, {ChangeEvent, FC, useState} from "react"
import s from "./PaginatorV1.module.css";

type PropsType = {
    totalCount: number
    pageSize: number
    pageNumber: number
    onPageNumber: (count: number,) => void
    shift?: number
    number?: boolean
    pageInfo?: boolean
}

let PaginatorV1: FC<PropsType> = ({
                                      totalCount, pageSize, pageNumber, onPageNumber,
                                      shift = 3, number = true, pageInfo = true
                                  }) => {


    const [pageNumberCount, setPageNumberCount] = useState<string>("");
    let listCount = Math.ceil(totalCount / pageSize);

    let i = pageNumber - shift
    let j = pageNumber + shift
    if (pageNumber - shift <= 0) {  // shift сдвиг влево и вправо от pageNumber
        j = j - (pageNumber - shift - 1)
        i = 1
    }
    if (listCount - pageNumber < shift) {
        i = i + (listCount - pageNumber - shift)
    }
    let pages: Array<number> = [];
    for (i; i <= j && i <= listCount; i++) {
        i > 0 && pages.push(i);
    }
    const handleListNumberCount = (event: ChangeEvent<HTMLInputElement>) => {
        setPageNumberCount(event.target.value)
    }
    const handleClickButton = () => {
        const count: number = +pageNumberCount
        if (+pageNumberCount > 0 && count <= listCount) {
            onPageNumber(count)
        }
    }
    return (
        <div>
            <div className={s.list}>
                <div>
                    <button disabled={pageNumber <= 1} onClick={(e) => {
                        const count = pageNumber - 1
                        onPageNumber(count)
                    }}> <div>{`<<`}</div>
                    </button>
                </div>
                {number && pages.map(p =>
                    <div key={p}>
                        <button className={pageNumber === p ? s.selectedPage : s.noSelectedPage}
                                onClick={() => {
                                    onPageNumber(p);
                                }}> {p} </button>
                    </div>
                )}
                <div>
                    <button disabled={pageNumber >= listCount} onClick={(e) => {
                        const count = pageNumber + 1
                        onPageNumber(count)
                    }}> <div>{`>>`}</div>
                    </button>
                </div>
            </div>
            {pageInfo &&
            <div className={s.list2}>
                <div>Всего {listCount} стр</div>
                <div>
                    <span>Перейти на</span>
                    <input value={pageNumberCount} onChange={handleListNumberCount} type='number' step="1"/>
                    <span>страницу</span>
                    <span className={s.searchButton}>
                        <button onClick={handleClickButton}>ОК</button>
                    </span>
                </div>
            </div>
            }
        </div>
    )
}
export default PaginatorV1;
