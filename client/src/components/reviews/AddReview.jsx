import React from 'react';
import './AddReview.css';

function AddReview(props) {
  return (
    <div className="add-review">
      <form action="/reviews" method="post">

        <label htmlFor="product-id">
          <input
            type="hidden"
            id="product-id"
            name="product_id"
            value={props.productId}
          />
        </label>

        <fieldset>
          <legend>Overall Rating*</legend>
          <label htmlFor="overall-rating-1">
            <input
              type="radio"
              id="overall-rating-1"
              name="rating"
              value="1"
            />
            Poor
          </label>
          <label htmlFor="overall-rating-2">
            <input
              type="radio"
              id="overall-rating-2"
              name="rating"
              value="2"
            />
            Fair
          </label>
          <label htmlFor="overall-rating-3">
            <input
              type="radio"
              id="overall-rating-3"
              name="rating"
              value="3"
            />
            Average
          </label>
          <label htmlFor="overall-rating-4">
            <input
              type="radio"
              id="overall-rating-4"
              name="rating"
              value="4"
            />
            Good
          </label>
          <label htmlFor="overall-rating-5">
            <input
              type="radio"
              id="overall-rating-5"
              name="rating"
              value="5"
            />
            Great
          </label>
        </fieldset>

        <fieldset>
          <legend>Do you recommend this product?*</legend>
          <label htmlFor="recommend-yes">
            <input
              type="radio"
              id="recommend-yes"
              name="recommend"
              value="Yes"
            />
            Yes
          </label>
          <label htmlFor="recommend-no">
            <input
              type="radio"
              id="recommend-no"
              name="recommend"
              value="No"
            />
            No
          </label>
        </fieldset>

        <fieldset>
          <legend>Characteristics*</legend>

          <fieldset>
            <legend>Size</legend>
            <p>none selected | &lt;meaning&gt;</p>
            <label htmlFor="size-rating-1">
              <input
                type="radio"
                id="size-rating-1"
                name="size-rating"
                value="1"
              />
              A size too small
            </label>
            <label htmlFor="size-rating-2">
              <input
                type="radio"
                id="size-rating-2"
                name="size-rating"
                value="2"
              />
              1&frasl;2 a size too small
            </label>
            <label htmlFor="size-rating-3">
              <input
                type="radio"
                id="size-rating-3"
                name="size-rating"
                value="3"
              />
              Perfect
            </label>
            <label htmlFor="size-rating-4">
              <input
                type="radio"
                id="size-rating-4"
                name="size-rating"
                value="4"
              />
              1&frasl;2 a size too big
            </label>
            <label htmlFor="size-rating-5">
              <input
                type="radio"
                id="size-rating-5"
                name="size-rating"
                value="5"
              />
              A size too wide
            </label>
          </fieldset>

          <fieldset>
            <legend>Width</legend>
            <label htmlFor="width-rating-1">
              <input
                type="radio"
                id="width-rating-1"
                name="width-rating"
                value="1"
              />
              Too narrow
            </label>
            <label htmlFor="width-rating-2">
              <input
                type="radio"
                id="width-rating-2"
                name="width-rating"
                value="2"
              />
              Slightly narrow
            </label>
            <label htmlFor="width-rating-3">
              <input
                type="radio"
                id="width-rating-3"
                name="width-rating"
                value="3"
              />
              Perfect
            </label>
            <label htmlFor="width-rating-4">
              <input
                type="radio"
                id="width-rating-4"
                name="width-rating"
                value="4"
              />
              Slightly wide
            </label>
            <label htmlFor="width-rating-5">
              <input
                type="radio"
                id="width-rating-5"
                name="width-rating"
                value="5"
              />
              Too wide
            </label>
          </fieldset>

          <fieldset>
            <legend>Comfort</legend>
            <label htmlFor="comfort-rating-1">
              <input
                type="radio"
                id="comfort-rating-1"
                name="comfort-rating"
                value="1"
              />
              Uncomfortable
            </label>
            <label htmlFor="comfort-rating-2">
              <input
                type="radio"
                id="comfort-rating-2"
                name="comfort-rating"
                value="2"
              />
              Slightly uncomfortable
            </label>
            <label htmlFor="comfort-rating-3">
              <input
                type="radio"
                id="comfort-rating-3"
                name="comfort-rating"
                value="3"
              />
              Ok
            </label>
            <label htmlFor="comfort-rating-4">
              <input
                type="radio"
                id="comfort-rating-4"
                name="comfort-rating"
                value="4"
              />
              Comfortable
            </label>
            <label htmlFor="comfort-rating-5">
              <input
                type="radio"
                id="comfort-rating-5"
                name="comfort-rating"
                value="5"
              />
              Perfect
            </label>
          </fieldset>

          <fieldset>
            <legend>Quality</legend>
            <label htmlFor="quality-rating-1">
              <input
                type="radio"
                id="quality-rating-1"
                name="quality-rating"
                value="1"
              />
              Poor
            </label>
            <label htmlFor="quality-rating-2">
              <input
                type="radio"
                id="quality-rating-2"
                name="quality-rating"
                value="2"
              />
              Below average
            </label>
            <label htmlFor="quality-rating-3">
              <input
                type="radio"
                id="quality-rating-3"
                name="quality-rating"
                value="3"
              />
              What I expected
            </label>
            <label htmlFor="quality-rating-4">
              <input
                type="radio"
                id="quality-rating-4"
                name="quality-rating"
                value="4"
              />
              Pretty great
            </label>
            <label htmlFor="quality-rating-5">
              <input
                type="radio"
                id="quality-rating-5"
                name="quality-rating"
                value="5"
              />
              Perfect
            </label>
          </fieldset>

          <fieldset>
            <legend>Length</legend>
            <label htmlFor="length-rating-1">
              <input
                type="radio"
                id="length-rating-1"
                name="length-rating"
                value="1"
              />
              Runs short
            </label>
            <label htmlFor="length-rating-2">
              <input
                type="radio"
                id="length-rating-2"
                name="length-rating"
                value="2"
              />
              Runs slightly short
            </label>
            <label htmlFor="length-rating-3">
              <input
                type="radio"
                id="length-rating-3"
                name="length-rating"
                value="3"
              />
              Perfect
            </label>
            <label htmlFor="length-rating-4">
              <input
                type="radio"
                id="length-rating-4"
                name="length-rating"
                value="4"
              />
              Runs slightly long
            </label>
            <label htmlFor="length-rating-5">
              <input
                type="radio"
                id="length-rating-5"
                name="length-rating"
                value="5"
              />
              Runs long
            </label>
          </fieldset>

          <fieldset>
            <legend>Fit</legend>
            <label htmlFor="fit-rating-1">
              <input
                type="radio"
                id="fit-rating-1"
                name="fit-rating"
                value="1"
              />
              Runs tight
            </label>
            <label htmlFor="fit-rating-2">
              <input
                type="radio"
                id="fit-rating-2"
                name="fit-rating"
                value="2"
              />
              Runs slightly tight
            </label>
            <label htmlFor="fit-rating-3">
              <input
                type="radio"
                id="fit-rating-3"
                name="fit-rating"
                value="3"
              />
              Perfect
            </label>
            <label htmlFor="fit-rating-4">
              <input
                type="radio"
                id="fit-rating-4"
                name="fit-rating"
                value="4"
              />
              Runs slightly long
            </label>
            <label htmlFor="fit-rating-5">
              <input
                type="radio"
                id="fit-rating-5"
                name="fit-rating"
                value="5"
              />
              Runs long
            </label>
          </fieldset>

        </fieldset>

        <label htmlFor="review-summary">
          <legend>Review summary</legend>
          <input
            type="text"
            id="review-summary"
            name="summary"
            maxLength="60"
            placeholder="Example: Best purchase ever!"
            size="60"
          />
        </label>

        <label htmlFor="review-body">
          <legend>Review body*</legend>
          <textarea
            id="review-body"
            name="body"
            minLength="50"
            maxLength="1000"
            placeholder="Why did you like the product or not?"
            rows="17"
            cols="60"
          />
          <p>Minimum required characters left: [50 - input] | Minimum reached</p>
        </label>

        <legend>Upload your photos</legend>
        <button type="button">Upload your photos</button>

        <label htmlFor="nickname">
          <legend>What is your nickname*</legend>
          <input
            type="text"
            id="nickname"
            name="name"
            maxLength="60"
            placeholder="Example: jackson11!"
            size="60"
          />
          <p>For privacy reasons, do not use your full name or email address</p>
        </label>

        <label htmlFor="email">
          <legend>What is your nickname*</legend>
          <input
            type="text"
            id="email"
            name="email"
            maxLength="60"
            placeholder="Example: jackson11@email.com"
            size="60"
          />
          <p>For authentication reasons, you will not be emailed</p>
        </label>

        <label htmlFor="submit-review">
          <input
            type="submit"
            id="submit-review"
            value="Submit review"
          />
        </label>
      </form>
    </div>
  );
}

export default AddReview;
