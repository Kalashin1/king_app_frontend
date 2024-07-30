import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase-settings"

export const getCourseById = async (course_id) => {
  try {
    const docRef = await getDoc(doc(db, "courses", course_id));
    if (docRef.exists()) {
      return [null, { id: docRef.id, ...docRef.data() }]
    }
  } catch (error) {
    return [error, null]
  }
}