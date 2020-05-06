import * as firebase from "firebase";
import * as moment from "moment";

export function get() {
  console.log(firebase.database().ref("exams/"))
  return firebase.database().ref("exams/");
}

export function saveNewItem(data) {
  return firebase.database().ref("exams/").push({
    anUniversitar: data.anUniversitar,
    sesiune: data.sesiune,
    anStudiu: data.anStudiu,
    sectie: data.sectie,
    nrLocuri: data.nrLocuri,
    materie: data.materie,
    profesor: data.profesor,
    dataExamen: data.dataExamen ? data.dataExamen : moment().format('YYYY-MM-DD'),
  })
}

export function saveEdits(data) {
  return firebase
    .database()
    .ref("exams/" + data.id)
    .update({
      anUniversitar: data.anUniversitar,
      sesiune: data.sesiune,
      anStudiu: data.anStudiu,
      sectie: data.sectie,
      nrLocuri: data.nrLocuri,
      materie: data.materie,
      profesor: data.profesor,
      dataExamen: data.dataExamen,
    });
}

export function removeItem(id) {
  return firebase
    .database()
    .ref("exams/" + id)
    .remove();
}
