import {firebaseDatabase} from './firebase';

class CardRepository{

    syncCards(userId,onUpadte){
        const ref = firebaseDatabase.ref(`${userId}/cards`);
        ref.on('value', snapshot =>{
            const value = snapshot.val();
            value && onUpadte(value);
        });
        return () => ref.off();
    }

    saveCard(userId,card){
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
    }
    removeCard(userId,card){
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
    }
}

export default CardRepository;