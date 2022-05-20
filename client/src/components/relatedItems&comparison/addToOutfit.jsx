

function AddToOutfit({id, addToOutfit}) {
  return (
    <div className="card" onClick={()=> addToOutfit(id)}>
      <p style={{textAlign:'center'}}>+</p>
    </div>
  );
}

export default AddToOutfit;