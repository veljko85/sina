function setSmallerFenceSize(
  rightPost,
  rightPostCap,
  foundationRight,
  newFenceForwardSigns,
  newFenceRightSigns,
  newFenceLeftSigns,
  newFenceBackSigns,
  getAbsPosX,
  getAbsPosZ,
  fakeFence,
  rightWoodPost,
  type
) {
  rightPost.position.x = rightWoodPost.position.x = rightPost.position.x - 0.9;
  rightPostCap.position.x = rightPostCap.position.x - 0.9;

  fakeFence.scaling.x = 0.5;
  fakeFence.position.x = 0.455;

  // foundationRight.position.x = getAbsPosX;
  // foundationRight.setAbsolutePosition(
  //   new BABYLON.Vector3(
  //     getAbsPosX(rightPost),
  //     foundationRight.position.y,
  //     getAbsPosZ(rightPost)
  //   )
  // );

  newFenceForwardSigns[newFenceForwardSigns.length - 1].setAbsolutePosition(
    new BABYLON.Vector3(
      getAbsPosX(rightPost) + 0.3,
      newFenceForwardSigns[newFenceForwardSigns.length - 1].position.y,
      getAbsPosZ(rightPost)
    )
  );

  newFenceRightSigns[newFenceRightSigns.length - 1].setAbsolutePosition(
    new BABYLON.Vector3(
      getAbsPosX(rightPost),
      newFenceRightSigns[newFenceRightSigns.length - 1].position.y,
      getAbsPosZ(rightPost) - 0.3
    )
  );

  newFenceLeftSigns[newFenceLeftSigns.length - 1].setAbsolutePosition(
    new BABYLON.Vector3(
      getAbsPosX(rightPost),
      newFenceLeftSigns[newFenceLeftSigns.length - 1].position.y,
      getAbsPosZ(rightPost) + 0.3
    )
  );

  newFenceBackSigns[newFenceBackSigns.length - 1].setAbsolutePosition(
    new BABYLON.Vector3(
      getAbsPosX(rightPost) - 0.3,
      newFenceBackSigns[newFenceBackSigns.length - 1].position.y,
      getAbsPosZ(rightPost)
    )
  );
}
