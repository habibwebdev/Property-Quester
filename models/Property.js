import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const propertySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number },
    rentByMonth: { type: Number },
    rentByYear: { type: Number },
    price: { type: Number },
    type: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    featuredImage: { type: String, required: true },
    isFeatured: { type: Boolean, required: true, default: false },
    reviews: [reviewSchema],
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Property =
  mongoose.models.Property || mongoose.model('Property', propertySchema)

export default Property
