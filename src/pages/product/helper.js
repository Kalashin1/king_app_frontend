import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase-settings";

export const getPlanById = async (planId) => {
  try {
    const docRef = await getDoc(doc(db, "plans", planId));
    if (docRef.exists()) {
      return [null, { id: docRef.id, ...docRef.data() }]
    }
  } catch (error) {
    return [error, null]
  }
} 