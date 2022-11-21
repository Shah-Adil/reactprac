const Like = (props) => {
    let classes = 'fa fa-heart';
    if (!props.liked) classes += "-o"


    return (

        <i onClick={props.onLiked} className={classes}></i>


    );
}

export default Like;