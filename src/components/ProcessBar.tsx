import "./style.css"

const ProcessBar = (props: any) => {
    let amount: number = props.amount;
    let percent: number = props.percent;
    let isOut: boolean = props.isOut;
    let isNear: boolean = props.isNear;

    let label = (
        <>
            <span className={"font-bold"}>{amount} </span>
            sản phẩm đã bán
        </>)
    if (isNear) {
        percent = 95;
        label = (<>🔥 Sắp cháy hàng</>)
    } else if (isOut) {
        percent = 100
        label = (<>Hết hàng</>)
    }
    return (
        <div className={"progress-container"}>
            <div className={"progress-bar"} style={{width: `${percent}%`}}></div>
            <div className={"progress-label"}>{label}</div>
        </div>
    )
}
export default ProcessBar;