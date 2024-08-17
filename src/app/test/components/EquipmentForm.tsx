"use client";



const EquipmentForm = () => {
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" className="form-control" id="description" placeholder="Enter description" />
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="text" className="form-control" id="image" placeholder="Enter image" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default EquipmentForm
