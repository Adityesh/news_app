interface IRequest {
    (url : string, query : IQuery) : Promise<void>
}

export default IRequest