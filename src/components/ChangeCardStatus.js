let changeCardStatus = (card, cardID, team, newStatus, dispatcher) => {
    console.log(cardID);
    console.log(dispatcher);
    console.log(newStatus);
    console.log(team);
    dispatcher({type: "SWITCH_CARD", newStatus: {card: card, team: team, cardID: cardID, newStatus: newStatus}})
}

export default changeCardStatus;