

function AddToOutfit({id, addToOutfit}) {
  return (
    <div className="card" onClick={()=> addToOutfit(id)}>
      <p style={{textAlign:'center', paddingTop: '60%', fontSize:'30px'}}>+</p>
    </div>
  );
}

export default AddToOutfit;