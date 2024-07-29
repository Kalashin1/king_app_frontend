import { query, collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-settings';

export const getDBITEMS = async (user_id) => {
  let cQ;
  let pQ

  if (user_id) {
    // do something
  } else {
    cQ = query(
      collection(db, "courses")
    )
    pQ = query(
      collection(db, "plans")
    )
  }

  const coursesRef = await getDocs(cQ);
  const courses = coursesRef.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

  const plansRef = await getDocs(pQ);
  const plans = plansRef.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

  return [courses, plans]
}